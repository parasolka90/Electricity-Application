package com.electricityapp.controller;


import com.electricityapp.domain.Period;
import com.electricityapp.domain.PeriodDto;
import com.electricityapp.mapper.PeriodMapper;
import com.electricityapp.service.PeriodDbService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/periods")
public class PeriodController {
    @Autowired
    PeriodDbService service;
    @Autowired
    PeriodMapper mapper;

    @GetMapping
    public List<PeriodDto> getPeriods() {
        return mapper.mapToPeriodDtoList(service.getAllPeriods());
    }

    @PostMapping
    public void createPeriods(@RequestBody PeriodDto periodDto) {
        service.savePeriod(mapper.mapToPeriod(periodDto));
    }

    @GetMapping(value = "/{periodId}")
    public PeriodDto getMeter(@PathVariable("periodId") Long periodId) {
        return mapper.mapToPeriodDto(service.getPeriod(periodId));
    }

    @PutMapping(value = "/{periodId}")
    public PeriodDto updateRate(@PathVariable("periodId") Long periodId, @RequestBody PeriodDto periodDto) {
        Period p = service.getPeriodById(periodId);
        if (periodDto.getYear()!= null) {
            p.setYear(periodDto.getYear());
        }
        if(periodDto.getMonth()!=null){
            p.setMonth(periodDto.getMonth());
        }
        return mapper.mapToPeriodDto(service.savePeriod(p));
    }

    @DeleteMapping(value = "/{periodId}")
    public void deletePeriod(@PathVariable("periodId") Long periodId) {
        service.deletePeriod(periodId);
    }
}
