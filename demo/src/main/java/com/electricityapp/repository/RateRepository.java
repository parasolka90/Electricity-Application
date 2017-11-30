package com.electricityapp.repository;

import org.springframework.data.repository.CrudRepository;
import com.electricityapp.domain.Rate;

import java.util.List;

public interface RateRepository extends CrudRepository<Rate, Long>{
    @Override
    List<Rate> findAll();

    @Override
    Rate save(Rate rate);

    @Override
    Rate findOne(Long id);

    @Override
    void delete(Long id);

}
