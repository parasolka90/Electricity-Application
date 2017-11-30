package com.electricityapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "READINGS")
public class Reading {
    @Id
    @GeneratedValue
    @NotNull
    @Column(name = "READING_ID", unique = true)
    private Long id;

    @Column(name = "START_DATE")
    private Date startingDate;

    @Column(name = "END_DATE")
    private Date endingDate;

    @Column(name = "READING")
    private BigDecimal reading;



    @JsonIgnore
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "METER_ID")
    private Meter meter;


    @JsonIgnore
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "TARIFF_ID")
    private Tariff tariff;
}
