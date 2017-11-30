package com.electricityapp.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter

public class RateDto {

    private Long id;

    private BigDecimal price;

    private Tariff tariff;

    private Period period;

}
