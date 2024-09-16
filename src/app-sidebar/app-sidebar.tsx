import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CNavGroup,
  CRow,
  CSidebar,
  CSidebarHeader,
  CSidebarNav,
  CBadge
} from "@coreui/react";
import {CIcon} from "@coreui/icons-react";
import {cilBook, cilBraille, cilSettings, cilStorage} from "@coreui/icons";
import {css} from "@emotion/css";
import classNames from "classnames";

const AppSidebar = () => {
  return <div className={css`width: 400px; position: fixed; margin-right: 20px`}>
    <CSidebar className={classNames("bg-dark rounded m-3", css`width: 350px`)}  colorScheme="dark">
      <CSidebarNav>
        <CSidebarHeader className="border-bottom">
          <span><CBadge color="primary">ФИН</CBadge> Контроль</span>
          <span><CBadge color="secondary">Меню</CBadge></span>
        </CSidebarHeader>
        <CNavGroup
          toggler={
            <>
            <CIcon customClassName="nav-icon" icon={cilSettings}/> <span>Настройки</span>
            </>
          }
        >
        </CNavGroup>
        <CNavGroup
          toggler={
            <>
              <CIcon customClassName="nav-icon" icon={cilBraille}/> Внесение данных
            </>
          }
        >
        </CNavGroup>
        <CNavGroup
          toggler={
            <>
              <CIcon customClassName="nav-icon" icon={cilStorage}/> Отчеты
            </>
          }
        >
        </CNavGroup>
        <CNavGroup
          toggler={
            <>
              <CIcon customClassName="nav-icon" icon={cilBook}/> База знаний
            </>
          }
        >
        </CNavGroup>
      </CSidebarNav>

    </CSidebar>
    <CCard className={classNames("bg-dark text-white rounded m-3", css`width: 350px`)}>
      <CCardHeader>
        Техническая поддержка
      </CCardHeader>
      <CCardBody>
        <CRow>
          <CCol>
            <div className="text-secondary">Номер поддержки:</div>
            <div>8 (999) 999 99 99</div>
          </CCol>
          <CCol>
            <div className="text-secondary">Почта поддержки:</div>
            <div>pf1@test.ru</div>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <div className="text-secondary">Часы работы:</div>
            <div>Пн-Пт с 9:00 до 19:00 мск</div>
          </CCol>
        </CRow>
        <div className="text-secondary border-1 border-bottom border-secondary">Пользовательское соглашение</div>
        <div className="text-secondary border-1 border-bottom border-secondary">Политика конфиденциальности</div>
        <div className="text-secondary border-1 border-bottom border-secondary">Юридическая информация</div>
        <div className="text-secondary border-1 border-bottom border-secondary">Публичная оферта</div>
      </CCardBody>
    </CCard>
    <div className={classNames("bg-info text-white rounded m-3 py-5 text-center", css`width: 350px`)}>
      Связаться с нами
    </div>
  </div>
}

export default AppSidebar