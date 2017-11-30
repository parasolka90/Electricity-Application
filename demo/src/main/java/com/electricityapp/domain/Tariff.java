package com.electricityapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "TARIFFS")
public class Tariff {
    @Id
    @GeneratedValue
    @NotNull
    @Column(name = "TARIFF_ID")
    private Long id;

    @Column(name = "TARIFF_SYMBOL")
    private String tariffSymbol;

    @Column(name = "EQUATION")
    private String equation;

    @JsonIgnore
    @OneToMany( targetEntity = Reading.class,
            mappedBy = "tariff",
            cascade = CascadeType.MERGE)
    private List<Reading> reading;

    @JsonIgnore
    @OneToMany( targetEntity = Rate.class,
            mappedBy = "tariff",
            cascade = CascadeType.MERGE)
    private List<Rate> rate;
}
