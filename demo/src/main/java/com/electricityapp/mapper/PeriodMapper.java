package com.electricityapp.mapper;

import org.springframework.stereotype.Component;
import com.electricityapp.domain.Period;
import com.electricityapp.domain.PeriodDto;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class PeriodMapper {
    public Period mapToPeriod(final PeriodDto periodDto){
        return new Period(
                periodDto.getId(),
                periodDto.getYear(),
                periodDto.getMonth(),
                periodDto.getRate());
    }
    public PeriodDto mapToPeriodDto(final Period period){
        return new PeriodDto(period.getId(),
                period.getYear(),
                period.getMonth(),
                period.getRate());
    }
    public List<PeriodDto> mapToPeriodDtoList(final List<Period> periodList){
        return periodList.stream()
                .map(p->new PeriodDto(p.getId(),
                        p.getYear(),
                        p.getMonth(),
                        p.getRate()))
                .collect(Collectors.toList());
    }

}
