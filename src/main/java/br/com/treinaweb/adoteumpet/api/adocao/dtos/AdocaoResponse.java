package br.com.treinaweb.adoteumpet.api.adocao.dtos;

import java.math.BigDecimal;

import br.com.treinaweb.adoteumpet.api.pet.dtos.PetResponse;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AdocaoResponse {

    private Long id;

    private String email;

    private BigDecimal valor;

    private PetResponse pet;
}
