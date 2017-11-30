package com.electricityapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.electricityapp.domain.Tariff;
import com.electricityapp.repository.TariffRepository;

import java.util.List;

@Service
public class TariffDbService {

    @Autowired
    TariffRepository repository;

    public List<Tariff> getAllTariffs(){
        return repository.findAll();
    }
    public Tariff getTariffById(Long id){
        return repository.findOne(id);
    }
    public Tariff saveTariff(Tariff tariff){
        return repository.save(tariff);
    }
    public void deleteTariff(Long id){
         repository.delete(id);
    }
}
