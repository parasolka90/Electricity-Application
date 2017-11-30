package com.electricityapp.mapper;

import org.springframework.stereotype.Component;
import com.electricityapp.domain.Meter;
import com.electricityapp.domain.MeterDto;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class MeterMapper {
    public Meter mapToMeter(final MeterDto meterDto){
        return new Meter(
                meterDto.getId(),
                meterDto.getClient(),
                meterDto.getReading());
    }
    public MeterDto mapToMeterDto(final Meter meter){
        return new MeterDto(meter.getId(),
                meter.getClient(),
                meter.getReading());
    }
    public List<MeterDto> mapToMeterDtoList(final List<Meter> meterList){
        return meterList.stream()
                .map(m->new MeterDto(m.getId(),
                        m.getClient(),
                        m.getReading()))
                .collect(Collectors.toList());
    }
}
