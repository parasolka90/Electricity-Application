package com.electricityapp.service;

import com.electricityapp.repository.RateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.electricityapp.domain.Rate;

import java.util.List;

@Service
public class RateDbService {
    @Autowired
    RateRepository repository;

    public List<Rate> getAllRates() {
        return repository.findAll();
    }

    public Rate getRateById(final Long id) {
        return repository.findOne(id);
    }

    public Rate saveRate(final Rate rate) {
        return repository.save(rate);
    }

    public Rate getRate(final Long id) {
        return repository.findOne(id);
    }

    public void deleteRate(Long id) {
        repository.delete(id);
    }
}
