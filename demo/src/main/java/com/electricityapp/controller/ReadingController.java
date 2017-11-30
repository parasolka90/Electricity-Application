package com.electricityapp.controller;

import com.electricityapp.domain.Reading;
import com.electricityapp.domain.ReadingDto;
import com.electricityapp.service.MeterDbService;
import com.electricityapp.service.TariffDbService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.electricityapp.mapper.ReadingMapper;
import com.electricityapp.service.RateDbService;
import com.electricityapp.service.ReadingDbService;

import java.util.List;
@RestController
@RequestMapping("/readings")
public class ReadingController {
    @Autowired
    ReadingDbService readingService;

    @Autowired
    MeterDbService meterService;
    @Autowired
    TariffDbService tariffService;
    @Autowired
    RateDbService rateDbService;

    @Autowired
    ReadingMapper mapper;

    @GetMapping
    public List<ReadingDto> getReading() {
        return mapper.mapToReadingDtoList(readingService.getAllReadings());
    }

    @PostMapping
    public void createReading(@RequestBody ReadingDto readingDto) {
        readingService.saveReading(mapper.mapToReading(readingDto));
    }

    @GetMapping(value = "/{readingId}")
    public ReadingDto getReading(@PathVariable("readingId") Long readingId) {
        return mapper.mapToReadingDto(readingService.getReadingById(readingId));
    }
    @PutMapping(value = "/{readingId}")
    public ReadingDto updateReading(@PathVariable("readingId") Long readingId, @RequestBody ReadingDto readingDto) {
        Reading r = readingService.getReadingById(readingId);

        if (readingDto.getStartingDate() != null) {
            r.setStartingDate(readingDto.getStartingDate());
        }
        if (readingDto.getEndingDate() != null) {
            r.setEndingDate(readingDto.getEndingDate());
        }
        if (readingDto.getReading() != null) {
            r.setReading(readingDto.getReading());
        }
        r.setReading(readingDto.getReading());

        if (readingDto.getMeter() != null) {
            r.setMeter(meterService.getMeterById(readingDto.getMeter().getId()));
        }

        if (readingDto.getTariff() != null) {
            r.setTariff(tariffService.getTariffById(readingDto.getTariff().getId()));
        }
        return mapper.mapToReadingDto(readingService.saveReading(r));
    }

    @DeleteMapping(value = "/{readingId}")
    public void deleteReading(@PathVariable("readingId") Long readingId) {
        readingService.deleteReading(readingId);
    }


}
