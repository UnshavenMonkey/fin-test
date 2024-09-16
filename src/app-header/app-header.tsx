import {CButton, CContainer, CHeader} from "@coreui/react";
import {cilCalendar, cilUser} from "@coreui/icons";
import {CIcon} from "@coreui/icons-react";

const AppHeader = () => {
  return (
    <CHeader position="sticky">
      <CContainer fluid>
        <div className="rounded bg-light py-3 px-3">
          <CIcon icon={cilUser}/>
          <span className="mx-3">
            Иванов И.И.
          </span>
        </div>
        <div className="rounded bg-light py-3 px-3 text-info">
          <CIcon icon={cilCalendar}/>
          <span className="mx-3">
            Тариф до 15.04.2024
          </span>
        </div>
        <div>
          <CButton variant="outline" color="dark" className="mx-3">
            Выйти
          </CButton>
          <CButton color="info" className="mx-3">
            О нас
          </CButton>
        </div>
      </CContainer>
    </CHeader>)
}

export default AppHeader;