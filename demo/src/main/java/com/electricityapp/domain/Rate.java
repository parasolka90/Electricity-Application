package com.electricityapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "RATES")
public class Rate {
    @Id
    @GeneratedValue
    @NotNull
    @Column(name = "RATE_ID", unique = true)
    private Long id;

    @Column(name = "PRICE")
    private BigDecimal price;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "TARIFF_ID")
    private Tariff tariff;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "PERIOD_ID")
    private Period period;

}
