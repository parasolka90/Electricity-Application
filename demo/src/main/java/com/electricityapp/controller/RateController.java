package com.electricityapp.controller;


import com.electricityapp.domain.Rate;
import com.electricityapp.domain.RateDto;
import com.electricityapp.mapper.RateMapper;
import com.electricityapp.service.TariffDbService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.electricityapp.service.PeriodDbService;
import com.electricityapp.service.RateDbService;

import java.util.List;

@RestController
@RequestMapping("/rates")
public class RateController {
    @Autowired
    private RateDbService rateService;
    @Autowired
    private TariffDbService tariffService;
    @Autowired
    PeriodDbService periodService;


    @Autowired
    private RateMapper mapper;

    @GetMapping
    public List<RateDto> getRates() {
        return mapper.mapToRateDtoList(rateService.getAllRates());
    }

    @PostMapping
    public void createRate(@RequestBody RateDto rateDto) {
        rateService.saveRate(mapper.mapToRate(rateDto));
    }

    @GetMapping(value = "/{rateId}")
    public RateDto getRate(@PathVariable("rateId") Long rateId) {
        return mapper.mapToRateDto(rateService.getRate(rateId));
    }

    @PutMapping(value = "/{rateId}")
    public RateDto updateRate(@PathVariable("rateId") Long rateId, @RequestBody RateDto rateDto) {
        Rate r = rateService.getRateById(rateId);
        if (rateDto.getPrice() != null) {
            r.setPrice(rateDto.getPrice());
        }
        if (rateDto.getTariff() != null) {
            r.setTariff(tariffService.getTariffById(rateDto.getTariff().getId()));
        }
        if (rateDto.getPeriod() != null) {
            r.setPeriod(periodService.getPeriod(rateDto.getPeriod().getId()));
        }
        return mapper.mapToRateDto(rateService.saveRate(r));
    }
    @DeleteMapping(value = "/{rateId}")
    public void deleteRate(@PathVariable("rateId") Long rateId) {
        rateService.deleteRate(rateId);
    }

}
