package com.electricityapp.mapper;

import org.springframework.stereotype.Component;
import com.electricityapp.domain.Client;
import com.electricityapp.domain.ClientDto;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ClientMapper {
    public Client mapToClient(final ClientDto clientDto){
        return new Client(
                clientDto.getId(),
                clientDto.getMeter());
    }
    public ClientDto mapToClientDto(final Client client){
        return new ClientDto(client.getId(),
                client.getMeter());
    }
    public List<ClientDto>mapToClientDtoList(final List<Client> clientList){
        return clientList.stream()
                .map(c->new ClientDto(c.getId(),c.getMeter()))
                .collect(Collectors.toList());
    }
}
