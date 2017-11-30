package com.electricityapp.mapper;

import com.electricityapp.domain.TariffDto;
import org.springframework.stereotype.Component;
import com.electricityapp.domain.Tariff;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class TariffMapper {
    public Tariff mapToTariff(final TariffDto tariffDto){
        return new Tariff(tariffDto.getId(),
                tariffDto.getTariffSymbol(),
                tariffDto.getEquation(),
                tariffDto.getReading(),
                tariffDto.getRate());
    }
    public TariffDto mapToTariffDto(final Tariff tariff){
        return new TariffDto(tariff.getId(),
                tariff.getTariffSymbol(),
                tariff.getEquation(),
                tariff.getReading(),
                tariff.getRate());
    }
    public List<TariffDto>mapToTariffDtoList(final List<Tariff> tariffList){
        return tariffList.stream()
                .map(t->new TariffDto(t.getId(),
                t.getTariffSymbol(),
                t.getEquation(),
                t.getReading(),
                t.getRate())).collect(Collectors.toList());
    }
}
