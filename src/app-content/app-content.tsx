import {
  CButton,
  CCol,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CRow,
  CTooltip
} from "@coreui/react";
import ProductTable from "../product-table/product-table.tsx";
import {ChangeEvent, useRef} from "react";
import {useAppDispatch, useAppSelector} from "../store.ts";
import {selectProductsList, setProducts} from "../slice/products-slice.ts";
import download from 'downloadjs';
import {CIcon} from "@coreui/icons-react";
import {cilDataTransferDown} from "@coreui/icons";


const AppContent = () => {
  const dispatch = useAppDispatch();
  const hiddenFileInputRef = useRef<HTMLInputElement>(null);
  const productsList = useAppSelector(selectProductsList)

  const handleImportClick = () => {
    const {current} = hiddenFileInputRef;
    if (current === null) return;
    current.click();
  };

  const handleImport = async (file: File) => {
    try {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          const importedData = JSON.parse(reader.result as string);
          dispatch(setProducts(importedData))
        } else {
          throw new Error("Невозможно прочитать содержимое файла");
        }
      };
      await reader.readAsText(file);
    } catch (error) {
      alert(`Ошибка импорта файла: ${error}`);
    }
  };

  const handleImportChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target?.files;
    if (files === null) return;
    const fileUploaded = files[0];
    return handleImport(fileUploaded);
  };

  const handleDownloadClick = async (fileType?: string) => {
    download(
      JSON.stringify(productsList),
      `data.${fileType}`
    );
  }

  const renderDropdown = () => {
    return (
      <CDropdown>
        <CTooltip content="Экспортировать файл">
          <span >
            <CDropdownToggle
              caret={false}
              className="ms-1 bg-dark text-white rounded-5 mx-3"
            >
              Экспорт
            </CDropdownToggle>
          </span>
        </CTooltip>
        <CDropdownMenu>
          <CDropdownItem
            onClick={() => handleDownloadClick('csv')}
          >
            CSV
          </CDropdownItem>
          <CDropdownItem
            onClick={() => handleDownloadClick('json')}
          >
            JSON
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    );
  };


  return <>
    <div className="d-flex align-content-center my-4">
      <span
      className="fs-3 me-4">Остатки сформированы на {new Date().toLocaleDateString()} г.
      </span>
      <CButton color="dark" shape="rounded-pill" size="sm">Инструкции</CButton>
    </div>
    <CRow>
      <CCol>
        <CFormLabel>Баркод</CFormLabel>
        <CFormInput/>
      </CCol>
      <CCol>
        <CFormLabel>Артикул</CFormLabel>
        <CFormInput/>
      </CCol>
      <CCol>
        <CFormLabel>Размер</CFormLabel>
        <CFormInput/>
      </CCol>
      <CCol>
        <CFormSelect label="Категория">
          <option value="1">Джинсы</option>
        </CFormSelect>
      </CCol>
    </CRow>
    <CRow>
      <div className="my-4">
        {renderDropdown()}
        <CButton shape="rounded-pill" color="info">Сформировать</CButton>
      </div>
    </CRow>
    <CRow className="my-3">
      <CCol>
        <div>
          <CButton shape="rounded-pill" variant="outline" color="dark" onClick={() => handleImportClick()}><CIcon icon={cilDataTransferDown} className="mx-2"/>Загрузить данные из CSV</CButton>
          <input
            type="file"
            style={{display: 'none'}}
            onChange={handleImportChange}
            ref={hiddenFileInputRef}
          />
        </div>
      </CCol>
      <CCol>
        <CButton shape="rounded-pill" variant="outline" color="dark">Изменить данные</CButton>
      </CCol>
      <CCol>
        <CButton shape="rounded-pill" variant="outline" color="dark" >Очистить</CButton>
      </CCol>
    </CRow>
    <ProductTable/>
  </>
}

export default AppContent