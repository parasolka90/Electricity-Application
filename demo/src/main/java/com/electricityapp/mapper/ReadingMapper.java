package com.electricityapp.mapper;

import com.electricityapp.domain.ReadingDto;
import org.springframework.stereotype.Component;
import com.electricityapp.domain.Reading;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ReadingMapper {
    public Reading mapToReading(final ReadingDto readingDto) {
        return new Reading(readingDto.getId(),
                readingDto.getStartingDate(),
                readingDto.getEndingDate(),
                readingDto.getReading(),
                readingDto.getMeter(),
                readingDto.getTariff());
    }

    public ReadingDto mapToReadingDto(final Reading reading) {
        return new ReadingDto(reading.getId(),
                reading.getStartingDate(),
                reading.getEndingDate(),
                reading.getReading(),
                reading.getMeter(),
                reading.getTariff());
    }

    public List<ReadingDto> mapToReadingDtoList(final List<Reading> readingList) {
        return readingList.stream()
                .map(r -> new ReadingDto(r.getId(),
                        r.getStartingDate(),
                        r.getEndingDate(),
                        r.getReading(),
                        r.getMeter(),
                        r.getTariff())).collect(Collectors.toList());
    }
}
