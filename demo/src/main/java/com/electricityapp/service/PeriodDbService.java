package com.electricityapp.service;

import com.electricityapp.domain.Period;
import com.electricityapp.repository.PeriodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PeriodDbService {
    @Autowired
    PeriodRepository repository;

    public List<Period> getAllPeriods() {
        return repository.findAll();
    }

    public Period getPeriodById(final Long id) {
        return repository.findOne(id);
    }

    public Period savePeriod(final Period period) {
        return repository.save(period);
    }

    public Period getPeriod(final Long id) {
        return repository.findOne(id);
    }

    public void deletePeriod(Long id) {
        repository.delete(id);
    }
}
