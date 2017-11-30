package com.electricityapp.repository;

import org.springframework.data.repository.CrudRepository;
import com.electricityapp.domain.Meter;

import java.util.List;

public interface MeterRepository extends CrudRepository<Meter,Long> {

    @Override
    List<Meter> findAll();

    @Override
    Meter save(Meter meter);

    @Override
    Meter findOne(Long id);

    @Override
    void delete(Long id);


}
