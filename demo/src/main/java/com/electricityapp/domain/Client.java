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
@Entity
@Getter
@Setter
@Table(name = "CLIENTS")
public class Client {
    @Id
    @GeneratedValue
    @NotNull
    @Column(name = "CLIENT_ID", unique = true)
    private Long id;

    @JsonIgnore
    @OneToMany(targetEntity = Meter.class,
            mappedBy = "client",
            cascade = CascadeType.MERGE,
            fetch = FetchType.LAZY)
    private List<Meter> meter;

}
