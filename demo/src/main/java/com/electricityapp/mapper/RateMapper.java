package com.electricityapp.mapper;

import com.electricityapp.domain.RateDto;
import org.springframework.stereotype.Component;
import com.electricityapp.domain.Rate;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class RateMapper {
    public Rate mapToRate(final RateDto rateDto){
        return new Rate(
                rateDto.getId(),
                rateDto.getPrice(),
                rateDto.getTariff(),
                rateDto.getPeriod());
    }
    public RateDto mapToRateDto(final Rate rate){
        return new RateDto(rate.getId(),
                rate.getPrice(),
                rate.getTariff(),
                rate.getPeriod());
    }
    public List<RateDto> mapToRateDtoList(final List<Rate> rateList){
        return rateList.stream()
                .map(r->new RateDto(r.getId(),
                        r.getPrice(),
                        r.getTariff(),
                        r.getPeriod()))
                .collect(Collectors.toList());
    }

}
