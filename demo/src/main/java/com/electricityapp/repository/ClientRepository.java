package com.electricityapp.repository;

import com.electricityapp.domain.Client;
import org.springframework.data.repository.CrudRepository;

import java.util.List;


public interface ClientRepository extends CrudRepository<Client,Long> {

    @Override
    List<Client> findAll();

    @Override
    Client save(Client client);

    @Override
    Client findOne(Long id);

    @Override
    void delete(Long id);
}
