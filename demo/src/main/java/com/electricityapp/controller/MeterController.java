package com.electricityapp.controller;

import bsh.EvalError;
import bsh.Interpreter;
import com.electricityapp.domain.*;
import com.electricityapp.mapper.MeterMapper;
import com.electricityapp.service.MeterDbService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.Calendar;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/meters")
public class MeterController {
    @Autowired
    private MeterDbService service;

    @Autowired
    private MeterMapper mapper;

    @GetMapping
    public List<MeterDto> getMeters() {
        return mapper.mapToMeterDtoList(service.getAllMeters());
    }

    @PostMapping
    public void createMeter(@RequestBody MeterDto meterDto) {
        service.saveMeter(mapper.mapToMeter(meterDto));
    }

    @GetMapping(value = "/{meterId}")
    public MeterDto getMeter(@PathVariable("meterId") Long meterId) {
        return mapper.mapToMeterDto(service.getMeter(meterId));
    }

    @PutMapping(value = "/{meterId}")
    public MeterDto updateMeter(@PathVariable("meterId") Long meterId, @RequestBody MeterDto meterDto) {
        Meter m = service.getMeterById(meterId);
        if (meterDto.getClient() != null) {
            m.setClient(meterDto.getClient());
        }
        return mapper.mapToMeterDto(service.saveMeter(m));
    }

    @DeleteMapping(value = "/{meterId}")
    public void deleteClient(@PathVariable("meterId") Long meterId) {
        service.deleteMeter(meterId);
    }

    @GetMapping(value = "/{meterId}/usage/{year}/{month}")
    public Double calculateUsage(@PathVariable("meterId") Long meterId, @PathVariable("year") Integer year,
                                              @PathVariable("month") Integer month) throws EvalError {
        Meter m = service.getMeterById(meterId);
        List<Reading> readingList = m.getReading();
        for (Reading r : readingList
                ) {
            Date date = r.getStartingDate();
            Calendar cal = Calendar.getInstance();
            cal.setTime(date);
            int startMonth = cal.get(Calendar.MONTH)+1;
            int startYear = cal.get(Calendar.YEAR);
            if (startMonth == month && startYear == year) {
                Tariff t = r.getTariff();
                List<Rate> rateList = t.getRate();
                for (Rate rate : rateList
                        ) {
                    Period p =rate.getPeriod();
                    int periodYear = p.getYear();
                    int periodMonth = p.getMonth();
                    if(periodYear==year && periodMonth==month){
                        Interpreter i = new Interpreter();
                        i.set("USAGE", r.getReading());
                        i.set("PRICE", rate.getPrice());
                        i.eval(t.getEquation());
                       return (Double)i.get("SUM");
                    }

                }
            }

        }
      return null;
    }
}
