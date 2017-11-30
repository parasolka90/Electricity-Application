package com.electricityapp.repository;

import com.electricityapp.domain.Period;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PeriodRepository  extends CrudRepository<Period,Long>{
    @Override
    List<Period> findAll();

    @Override
    Period save(Period period);

    @Override
    Period findOne(Long id);

    @Override
    void delete(Long id);
}
