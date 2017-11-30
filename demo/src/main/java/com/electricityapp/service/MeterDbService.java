package com.electricityapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.electricityapp.domain.Meter;
import com.electricityapp.repository.MeterRepository;

import java.util.List;

@Service
public class MeterDbService {
    @Autowired
    MeterRepository repository;

    public List<Meter> getAllMeters() {
        return repository.findAll();
    }

    public Meter getMeterById(final Long id) {
        return repository.findOne(id);
    }

    public Meter saveMeter(final Meter meter) {
        return repository.save(meter);
    }

    public Meter getMeter(final Long id) {
        return repository.findOne(id);
    }

    public void deleteMeter(Long id) {
        repository.delete(id);
    }
}