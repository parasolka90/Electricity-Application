package com.electricityapp.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

//Obliczenie kosztu zużycia energii za dany miesiąc dla wybranych grup taryfowych lub dla
//wybranych liczników
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UsageCalculationDto {
    private MeterDto meterDto;
    private List<ReadingDto> readingDto;
    private PeriodDto periodDto;
    private List<RateDto> rateDto;

}
