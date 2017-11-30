package com.electricityapp.service;

import com.electricityapp.domain.Reading;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.electricityapp.repository.ReadingRepository;

import java.util.List;

@Service
public class ReadingDbService {

    @Autowired
    ReadingRepository repository;

    public List<Reading> getAllReadings(){
        return repository.findAll();
    }
    public Reading getReadingById(Long id){
        return repository.findOne(id);
    }
    public Reading saveReading(Reading reading){
        return repository.save(reading);
    }
    public void deleteReading(Long id){
        System.out.println("lololo"+ id);
        repository.delete(id);
    }
}
