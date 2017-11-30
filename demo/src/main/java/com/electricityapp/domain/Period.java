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
@Table(name = "PERIODS")
public class Period {
    @Id
    @GeneratedValue
    @NotNull
    @Column(name = "PERIOD_ID", unique = true)
    private Long id;

    @Column(name = "YEAR")
    private Integer year;

    @Column(name = "MONTH")
    private Integer month;
    @JsonIgnore
    @OneToMany(targetEntity = Rate.class,
            mappedBy = "period",
            cascade = CascadeType.MERGE,
            fetch = FetchType.EAGER)
    private List<Rate> rate;

}
