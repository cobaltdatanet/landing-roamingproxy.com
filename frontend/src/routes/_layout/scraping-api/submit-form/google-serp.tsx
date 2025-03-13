// src/routes/_layout/scraping-api/submit-form/google-serp.tsx
import React, { useState } from 'react';
import {
  Container,
  Text,
  Button,
  VStack,
  HStack,
  Box,
  Input,
  FormControl,
  FormLabel,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  Tr,
  Td,
  Tbody,
  Select,
} from '@chakra-ui/react';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { FiSend } from 'react-icons/fi';
import * as XLSX from 'xlsx';
import ExcelJS from 'exceljs';
import ExcelDataTable from '../../../../components/ExcelDataTable';

// Constants
const STORAGE_KEY = 'subscriptionSettings';
const PRODUCT = 'serp';
const SERVER_URL = 'https://backend-dev.iconluxury.group';

// Interfaces
interface ColumnMapping {
  style: number | null;
  brand: number | null;
  imageAdd: number | null;
  readImage: number | null;
  category: number | null;
  colorName: number | null;
}

interface ExcelData {
  headers: string[];
  rows: { row: ExcelJS.CellValue[] }[];
}

// Helper Functions (unchanged)
function getDisplayValue(cellValue: any): string {
  if (cellValue === null || cellValue === undefined) return '';
  else if (typeof cellValue === 'string' || typeof cellValue === 'number' || typeof cellValue === 'boolean')
    return String(cellValue);
  else if (cellValue instanceof Date) return cellValue.toLocaleString();
  else if (typeof cellValue === 'object') {
    if (cellValue.error) return cellValue.error;
    else if (cellValue.result !== undefined) return getDisplayValue(cellValue.result);
    else if (cellValue.text) return cellValue.text;
    else if (cellValue.hyperlink) return cellValue.text || cellValue.hyperlink;
    else return JSON.stringify(cellValue);
  }
  return String(cellValue);
}

function indexToColumnLetter(index: number): string {
  let column = '';
  let temp = index;
  while (temp >= 0) {
    column = String.fromCharCode((temp % 26) + 65) + column;
    temp = Math.floor(temp / 26) - 1;
  }
  return column;
}

const ExcelDataTableMemo = React.memo(ExcelDataTable);

function GoogleSerpForm() {
  const [file, setFile] = useState<File | null>(null);
  const [isLoadingFile, setIsLoadingFile] = useState(false);
  const [excelData, setExcelData] = useState<ExcelData>({ headers: [], rows: [] });
  const [previewRows, setPreviewRows] = useState<any[]>([]);
  const [isHeaderModalOpen, setIsHeaderModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isMappingModalOpen, setIsMappingModalOpen] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null);
  const [selectedColumn, setSelectedColumn] = useState<number | null>(null);
  const [selectedField, setSelectedField] = useState<string>('');
  const [columnMapping, setColumnMapping] = useState<ColumnMapping>({
    style: null,
    brand: null,
    imageAdd: null,
    readImage: null,
    category: null,
    colorName: null,
  });
  const toast = useToast();
  const navigate = useNavigate();

  const requiredColumns = ['style', 'brand'];
  const optionalColumns = ['category', 'colorName', 'readImage', 'imageAdd'];
  const allColumns = [...requiredColumns, ...optionalColumns];
  const targetHeaders = ['IMAGE', 'BRAND', 'GENDER', 'STYLE', 'COLOR', 'CATEGORY'];

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const selectedFile = event.target.files?.[0];
      if (!selectedFile) return;
      if (!['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'].includes(selectedFile.type)) {
        throw new Error('Invalid file type. Please upload an Excel file (.xlsx or .xls)');
      }
      setFile(selectedFile);
      setExcelData({ headers: [], rows: [] });
      setColumnMapping({ style: null, brand: null, imageAdd: null, readImage: null, category: null, colorName: null });
  
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = e.target?.result;
          if (!data) throw new Error('Failed to read file');
          const workbook = XLSX.read(data, { type: 'binary' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1, blankrows: true, defval: '', raw: true });
          const preview = jsonData.slice(0, 100);
          setPreviewRows(preview);
  
          let headerRowIndex: number | null = null;
          for (let i = 0; i < Math.min(10, preview.length); i++) {
            const row = preview[i] as any[];
            const rowValues = row.map((cell: any) => String(cell).toUpperCase().trim());
            const matchedHeaders = rowValues.filter((value: string) => targetHeaders.includes(value));
            if (matchedHeaders.length >= 2) {
              headerRowIndex = i;
              break;
            }
          }
  
          if (headerRowIndex !== null) {
            const headers = preview[headerRowIndex] as string[];
            const rows = preview.slice(headerRowIndex + 1).map(row => ({ row: row as ExcelJS.CellValue[] }));
            setExcelData({ headers, rows });
            const newColumnMapping: ColumnMapping = { ...columnMapping };
            headers.forEach((header, index) => {
              const upperHeader = String(header).toUpperCase().trim();
              if (upperHeader === 'STYLE' && newColumnMapping.style === null) newColumnMapping.style = index;
              if (upperHeader === 'BRAND' && newColumnMapping.brand === null) newColumnMapping.brand = index;
            });
            let optionalIndex = 0;
            headers.forEach((header, index) => {
              const upperHeader = String(header).toUpperCase().trim();
              if (upperHeader === 'CATEGORY' && newColumnMapping.category === null) newColumnMapping.category = index;
              else if (upperHeader === 'COLOR' && newColumnMapping.colorName === null) newColumnMapping.colorName = index;
              else if (upperHeader === 'IMAGE' && newColumnMapping.readImage === null && newColumnMapping.imageAdd === null) {
                newColumnMapping.imageAdd = index;
              } else if (upperHeader === 'GENDER' && optionalIndex < optionalColumns.length) {
                while (optionalIndex < optionalColumns.length && newColumnMapping[optionalColumns[optionalIndex]] !== null) {
                  optionalIndex++;
                }
                if (optionalIndex < optionalColumns.length) {
                  newColumnMapping[optionalColumns[optionalIndex]] = index;
                  optionalIndex++;
                }
              }
            });
            setColumnMapping(newColumnMapping);
            toast({ title: 'Header Auto-Detected', description: `Row ${headerRowIndex + 1} selected`, status: 'info', duration: 4000, isClosable: true, position: 'top' });
          } else {
            setIsHeaderModalOpen(true);
          }
        } catch (error) {
          throw new Error('Error parsing Excel file: ' + error.message);
        }
      };
      reader.onerror = () => { throw new Error('Error reading file'); };
      reader.readAsBinaryString(selectedFile);
    } catch (error) {
      toast({ title: 'File Upload Error', description: error.message, status: 'error', duration: 4000, isClosable: true, position: 'top' });
      setFile(null);
    }
  };

  const handleRowSelect = (rowIndex: number) => {
    setSelectedRowIndex(rowIndex);
    setIsConfirmModalOpen(true);
  };

  const confirmHeaderSelect = () => {
    if (selectedRowIndex === null) return;
    const headers = previewRows[selectedRowIndex] as string[];
    const rows = previewRows.slice(selectedRowIndex + 1).map(row => ({ row: row as ExcelJS.CellValue[] }));
    setExcelData({ headers, rows });
    const newColumnMapping: ColumnMapping = { ...columnMapping };
    headers.forEach((header, index) => {
      const upperHeader = String(header).toUpperCase().trim();
      if (upperHeader === 'STYLE' && newColumnMapping.style === null) newColumnMapping.style = index;
      if (upperHeader === 'BRAND' && newColumnMapping.brand === null) newColumnMapping.brand = index;
    });
    let optionalIndex = 0;
    headers.forEach((header, index) => {
      const upperHeader = String(header).toUpperCase().trim();
      if (upperHeader === 'CATEGORY' && newColumnMapping.category === null) newColumnMapping.category = index;
      else if (upperHeader === 'COLOR' && newColumnMapping.colorName === null) newColumnMapping.colorName = index;
      else if (upperHeader === 'IMAGE' && newColumnMapping.readImage === null && newColumnMapping.imageAdd === null) {
        newColumnMapping.imageAdd = index;
      } else if (upperHeader === 'GENDER' && optionalIndex < optionalColumns.length) {
        while (optionalIndex < optionalColumns.length && newColumnMapping[optionalColumns[optionalIndex]] !== null) {
          optionalIndex++;
        }
        if (optionalIndex < optionalColumns.length) {
          newColumnMapping[optionalColumns[optionalIndex]] = index;
          optionalIndex++;
        }
      }
    });
    setColumnMapping(newColumnMapping);
    setIsHeaderModalOpen(false);
    setIsConfirmModalOpen(false);
    setIsLoadingFile(false);
    toast({ title: 'Header Selected', description: `Row ${selectedRowIndex + 1} confirmed`, status: 'info', duration: 4000, isClosable: true, position: 'top' });
  };

  const handleSubmit = async () => {
    try {
      const missingRequired = requiredColumns.filter(col => columnMapping[col] === null);
      if (missingRequired.length > 0) {
        toast({ title: 'Missing Required Columns', description: `Map: ${missingRequired.join(', ')}`, status: 'warning', duration: 4000, isClosable: true, position: 'top' });
        return;
      }
      if (!file) throw new Error('No file selected');
      setIsLoadingFile(true);
      const formData = new FormData();
      formData.append('fileUploadImage', file);
      const styleCol = columnMapping.style !== null ? indexToColumnLetter(columnMapping.style) : 'A';
      const brandCol = columnMapping.brand !== null ? indexToColumnLetter(columnMapping.brand) : 'B';
      const imageAddCol = columnMapping.imageAdd !== null ? indexToColumnLetter(columnMapping.imageAdd) : null;
      const readImageCol = columnMapping.readImage !== null ? indexToColumnLetter(columnMapping.readImage) : null;
      const colorCol = columnMapping.colorName !== null ? indexToColumnLetter(columnMapping.colorName) : null;
      const categoryCol = columnMapping.category !== null ? indexToColumnLetter(columnMapping.category) : null;
      const imageColumnImage = readImageCol || imageAddCol;
      if (imageColumnImage) formData.append('imageColumnImage', imageColumnImage);
      formData.append('searchColImage', styleCol);
      formData.append('brandColImage', brandCol);
      if (colorCol) formData.append('ColorColImage', colorCol);
      if (categoryCol) formData.append('CategoryColImage', categoryCol);
      const response = await fetch(`${SERVER_URL}/submitImage`, { method: 'POST', body: formData });
      if (!response.ok) throw new Error(`Server error: ${response.status} - ${await response.text()}`);
      const result = await response.json();
      toast({ title: 'Success', description: 'Data submitted', status: 'success', duration: 4000, isClosable: true, position: 'top' });
      navigate({ to: '/scraping-api/submit-form/success' });
      return result;
    } catch (error) {
      toast({ title: 'Submission Error', description: error.message, status: 'error', duration: 5000, isClosable: true, position: 'top' });
      throw error;
    } finally {
      setIsLoadingFile(false);
    }
  };

  const handleMappingConfirm = (confirm: boolean) => {
    if (confirm && selectedColumn !== null) {
      const newMapping = { ...columnMapping };
      Object.keys(newMapping).forEach(key => {
        if (newMapping[key] === selectedColumn) {
          newMapping[key] = null;
        }
      });
      if (selectedField && selectedField !== '') {
        newMapping[selectedField] = selectedColumn;
      }
      setColumnMapping(newMapping);
    }
    setIsMappingModalOpen(false);
    setSelectedColumn(null);
    setSelectedField('');
  };

  const openMappingModal = (columnIndex: number) => {
    setSelectedColumn(columnIndex);
    const currentField = Object.keys(columnMapping).find(key => columnMapping[key] === columnIndex) || '';
    setSelectedField(currentField);
    setIsMappingModalOpen(true);
  };

  const allRequiredSelected = requiredColumns.every(col => columnMapping[col] !== null);
  const missingRequired = requiredColumns.filter(col => columnMapping[col] === null);
  const mappedColumns = Object.entries(columnMapping)
    .filter(([_, index]) => index !== null)
    .map(([col, index]) => `${col.replace(/([A-Z])/g, ' $1').trim()}: ${excelData.headers[index as number] || `Column ${index! + 1}`}`);

  return (
    <Container maxW="full" h="100vh" p={4}>
      <VStack spacing={6} align="stretch" h="full">
        {/* Main Title and Subtitle */}
        <VStack spacing={2} align="stretch">
          <Text fontSize="2xl" fontWeight="bold" color="white">Google SERP Form</Text>
          <Text fontSize="md" color="gray.300">
            Upload an Excel file, select header row, and map required fields (Style, Brand).
          </Text>
        </VStack>

        {/* Controls */}
        <HStack spacing={4} align="center">
          <FormControl w="sm">
            <FormLabel color="white">Upload Excel File</FormLabel>
            <Input
              type="file"
              accept=".xlsx,.xls"
              onChange={handleFileChange}
              disabled={isLoadingFile}
            />
          </FormControl>
          <HStack spacing={4} align="center" flex="1">
            <Button
              colorScheme="green"
              leftIcon={<FiSend />}
              onClick={handleSubmit}
              isDisabled={!excelData.rows.length || isLoadingFile || !allRequiredSelected}
              isLoading={isLoadingFile}
              mt={6}
            >
              Submit
            </Button>
            {excelData.headers.length > 0 && (
              <VStack align="start" spacing={1} mt={6}>
                <Text fontSize="sm" color="gray.400">Rows: {excelData.rows.length}</Text>
                <Text fontSize="sm" color={missingRequired.length > 0 ? 'red.300' : 'teal.300'}>
                  {missingRequired.length > 0
                    ? `Missing: ${missingRequired.join(', ')}`
                    : `Mapped: ${mappedColumns.join(', ')}`}
                </Text>
              </VStack>
            )}
   
          </HStack>
        </HStack>
        {isLoadingFile && <Text color="gray.400" mt={6}>Processing...</Text>}
        {/* Separator */}
        <Box borderBottomWidth="1px" borderColor="gray.600" my={4} />

        {/* Preview Data */}
        {excelData.rows.length > 0 && (
          <Box flex="1" overflowY="auto" maxH="60vh" borderWidth="1px" borderRadius="md" p={4}>
            <ExcelDataTableMemo
              excelData={excelData}
              columnMapping={columnMapping}
              setColumnMapping={setColumnMapping}
              onColumnClick={openMappingModal}
            />
          </Box>
        )}

        {/* Mapping Modal */}
        <Modal isOpen={isMappingModalOpen} onClose={() => setIsMappingModalOpen(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Map Column</ModalHeader>
            <ModalBody>
              <Text>
                Map "{selectedColumn !== null ? excelData.headers[selectedColumn] || `Column ${selectedColumn + 1}` : 'Select a column'}" to:
              </Text>
              <Select 
                value={selectedField} 
                onChange={(e) => setSelectedField(e.target.value)}
                mt={2}
              >
                <option value="">None</option>
                {allColumns.map(col => (
                  <option key={col} value={col}>
                    {col}
                  </option>
                ))}
              </Select>
              {allRequiredSelected && (
                <Text fontSize="sm" color="gray.500" mt={2}>
                  Optional mappings: {optionalColumns
                    .filter(col => columnMapping[col] !== null)
                    .map(col => `${col}: ${excelData.headers[columnMapping[col]!] || `Column ${columnMapping[col]! + 1}`}`)
                    .join(', ') || 'None'}
                </Text>
              )}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="green" mr={3} onClick={() => handleMappingConfirm(true)}>
                Confirm
              </Button>
              <Button variant="ghost" onClick={() => handleMappingConfirm(false)}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* Header Selection Modals */}
        <Modal isOpen={isHeaderModalOpen} onClose={() => setIsHeaderModalOpen(false)} size="xl">
          <ModalOverlay />
          <ModalContent alignSelf="left" ml={4} mt={16}>
            <ModalHeader>Select Header Row (Click a row) - {previewRows.length} Rows</ModalHeader>
            <ModalBody maxH="60vh" overflowY="auto">
              <Table size="sm">
                <Tbody>
                  {previewRows.map((row, rowIndex) => (
                    <Tr key={rowIndex} onClick={() => handleRowSelect(rowIndex)} cursor="pointer" _hover={{ bg: 'gray.100' }}>
                      {row.map((cell: any, cellIndex: number) => (
                        <Td key={cellIndex} py={2} px={3}>{getDisplayValue(cell)}</Td>
                      ))}
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </ModalBody>
            <ModalFooter>
              <Button size="sm" onClick={() => setIsHeaderModalOpen(false)}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Modal isOpen={isConfirmModalOpen} onClose={() => setIsConfirmModalOpen(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Confirm Header Selection</ModalHeader>
            <ModalBody>
              <Text>Use row {selectedRowIndex !== null ? selectedRowIndex + 1 : ''} as header?</Text>
              {selectedRowIndex !== null && <Text mt={2}>{previewRows[selectedRowIndex].join(', ')}</Text>}
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="green" mr={3} onClick={confirmHeaderSelect}>Confirm</Button>
              <Button variant="ghost" onClick={() => setIsConfirmModalOpen(false)}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </VStack>
    </Container>
  );
}

export const Route = createFileRoute('/_layout/scraping-api/submit-form/google-serp')({
  component: GoogleSerpForm,
});