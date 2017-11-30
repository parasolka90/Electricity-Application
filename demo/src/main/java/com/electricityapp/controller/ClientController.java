package com.electricityapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.electricityapp.domain.Client;
import com.electricityapp.domain.ClientDto;
import com.electricityapp.mapper.ClientMapper;
import com.electricityapp.service.ClientDbService;


import java.util.List;

@RestController
@RequestMapping("/clients")
public class ClientController {
    @Autowired
    private ClientDbService service;

    @Autowired
    private ClientMapper mapper;

    @GetMapping
    public List<ClientDto> getClients() {
        return mapper.mapToClientDtoList(service.getAllClients());
    }

    @PostMapping
    public void createClient(@RequestBody ClientDto clientDto) {
        service.saveClient(mapper.mapToClient(clientDto));
    }

    @RequestMapping(method = RequestMethod.GET, value = "/{clientId}")
    public ClientDto getClient(@PathVariable("clientId") Long clientId) {
        return mapper.mapToClientDto(service.getClient(clientId));
    }

    @PutMapping(value = "/{clientId}")
    public ClientDto updateClient(@RequestBody ClientDto clientDto, @PathVariable("clientId") Long clientId) {
        Client c = service.getClientById(clientId);
        if (clientDto.getMeter() != null) {
            c.setMeter(clientDto.getMeter());
        }
        return mapper.mapToClientDto(service.saveClient(c));
    }

    @DeleteMapping(value = "/{clientId}")
    public void deleteClient(@PathVariable("clientId") Long clientId) {
        service.deleteClient(clientId);
    }


}
