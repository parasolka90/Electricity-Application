package com.electricityapp.repository;

import com.electricityapp.domain.Reading;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ReadingRepository extends CrudRepository<Reading, Long> {
    @Override
    List<Reading> findAll();

    @Override
    Reading save(Reading reading);

    @Override
    Reading findOne(Long id);

    @Override
    void delete(Long id);

}
