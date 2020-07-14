import React from "react"

import {
  StyledSectionLayout,
  ServicesWrapper,
  LeadBlock,
  ServicesBlock,
  Service,
} from "./03Services.style"

const Services = () => (
  <StyledSectionLayout>
    <ServicesWrapper>
      <LeadBlock>
        <h2>
          Zapewniamy kompleksowe usługi geodezyjne, które dopasowujemy do
          indywidualnych oczekiwań naszych klientów
        </h2>
      </LeadBlock>
      <ServicesBlock>
        <Service>
          <h3>Mapy</h3>
          <p>do celów projektowych</p>
        </Service>
        <Service>
          <h3>Tyczenie</h3>
          <p>obiektów budowlanych</p>
        </Service>
        <Service>
          <h3>Inwentaryacje</h3>
          <p>powykonawcze, pomiary odkształceń</p>
        </Service>
        <Service>
          <h3>Podziały</h3>
          <p>nieruchomości</p>
        </Service>
        <Service>
          <h3>Wyznaczenia </h3>
          <p>i wznowienia granic nieruchomości</p>
        </Service>
        <Service>
          <h3>Pomiar elewacji </h3>
          <p>budynków, obmiary lokali</p>
        </Service>
        <Service>
          <h3>Profile budynków</h3>
          <p>obmiary lokali</p>
        </Service>
        <Service>
          <h3>Kompleksowa obsługa</h3>
          <p>geodezyjna developerów</p>
        </Service>
      </ServicesBlock>
    </ServicesWrapper>
  </StyledSectionLayout>
)

export default Services
