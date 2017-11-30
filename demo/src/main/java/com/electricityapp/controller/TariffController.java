package com.electricityapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.electricityapp.domain.Tariff;
import com.electricityapp.domain.TariffDto;
import com.electricityapp.mapper.TariffMapper;
import com.electricityapp.service.TariffDbService;

import java.util.List;
@RestController
@RequestMapping("/tariffs")
public class TariffController {

    @Autowired
    TariffDbService service;
    @Autowired
    TariffMapper mapper;

    @GetMapping
    public List<TariffDto> getTariffs(){
        return mapper.mapToTariffDtoList(service.getAllTariffs());
    }
    @GetMapping(value = "/{tariffId}")
    public TariffDto getTariff(@PathVariable ("tariffId") Long tariffId){
        return mapper.mapToTariffDto(service.getTariffById(tariffId));
    }
    @PostMapping
    public void createTariff(@RequestBody TariffDto tariffDto){
        service.saveTariff(mapper.mapToTariff(tariffDto));
    }
    @PutMapping( value = "/{tariffId}")
    public TariffDto updateTariff(@PathVariable("tariffId")Long tariffId,@RequestBody TariffDto tariffDto){
      Tariff t =  service.getTariffById(tariffId);
      if(tariffDto.getEquation()!=null){
          t.setEquation(tariffDto.getEquation());
      }
      if(tariffDto.getTariffSymbol()!=null){
          t.setTariffSymbol(tariffDto.getTariffSymbol());
      }
       return mapper.mapToTariffDto(service.saveTariff(t));
    }
    @DeleteMapping( value = "/{tariffId}")
    public void deleteTariff(@PathVariable("tariffId") Long tariffId){
        service.deleteTariff(tariffId);
    }
}
