package com.electricityapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "METERS")
public class Meter {
    @Id
    @GeneratedValue
    @NotNull
    @Column(name = "METER_ID", unique = true)
    private Long id;

    @JsonIgnore
    @NotNull

    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "CLIENT_ID")
    private Client client;

    @JsonIgnore
    @OneToMany(targetEntity = Reading.class,
            mappedBy = "meter",
            cascade = CascadeType.MERGE,
            fetch = FetchType.EAGER)
    private List<Reading> reading;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Meter meter = (Meter) o;

        return id.equals(meter.id);
    }

    @Override
    public int hashCode() {
        return id.hashCode();
    }
}
