package com.electricityapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.electricityapp.domain.Client;
import com.electricityapp.repository.ClientRepository;

import java.util.List;

@Service
public class ClientDbService {

    @Autowired
    ClientRepository repository;

    public List<Client> getAllClients(){
        return repository.findAll();
    }
    public Client getClientById(final Long id){
        return repository.findOne(id);
    }
    public Client saveClient(final Client client){
        return repository.save(client);
    }
    public Client getClient(final Long id){
        return repository.findOne(id);
    }
    public void deleteClient(Long id) {
         repository.delete(id);
    }
}
