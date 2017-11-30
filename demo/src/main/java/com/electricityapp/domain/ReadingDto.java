package com.electricityapp.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.math.BigDecimal;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ReadingDto {
    private Long id;

    private Date startingDate;

    private Date endingDate;

    private BigDecimal reading;

    private Meter meter;

    private Tariff tariff;
}
