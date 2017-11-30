package com.electricityapp.repository;
import org.springframework.data.repository.CrudRepository;
import com.electricityapp.domain.Tariff;

import java.util.List;

public interface TariffRepository extends CrudRepository<Tariff,Long> {
    @Override
    List<Tariff> findAll();

    @Override
    Tariff save(Tariff meter);

    @Override
    Tariff findOne(Long id);

    @Override
    void delete(Long id);
}
//dla kazdego readingu znalezc raty które znajduja sie w okresie readingu
//