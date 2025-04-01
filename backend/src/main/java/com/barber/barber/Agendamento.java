package com.barber.barber;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "agendamentos")
public class Agendamento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private Long id;

    @Column(nullable = false)
    private String nomeCliente;

    @Column(nullable = false)
    private String telefone;

    private String email;

    @Column(nullable = false)
    private LocalDate dataAgendamento;

    @Column(nullable = false)
    private String horario;

    @Column(nullable = false)
    private String servico;

    @Column(nullable = false)
    private String barbeiro;

    
    public Agendamento() {
    }

    
    public Agendamento(String nomeCliente, String telefone, String email, LocalDate dataAgendamento, String horario, String servico, String barbeiro) {
        this.nomeCliente = nomeCliente;
        this.telefone = telefone;
        this.email = email;
        this.dataAgendamento = dataAgendamento;
        this.horario = horario;
        this.servico = servico;
        this.barbeiro = barbeiro;
    }

    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomeCliente() {
        return nomeCliente;
    }

    public void setNomeCliente(String nomeCliente) {
        this.nomeCliente = nomeCliente;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public LocalDate getDataAgendamento() {
        return dataAgendamento;
    }

    public void setDataAgendamento(LocalDate dataAgendamento) {
        this.dataAgendamento = dataAgendamento;
    }

    public String getHorario() {
        return horario;
    }

    public void setHorario(String horario) {
        this.horario = horario;
    }

    public String getServico() {
        return servico;
    }

    public void setServico(String servico) {
        this.servico = servico;
    }

    public String getBarbeiro() {
        return barbeiro;
    }

    public void setBarbeiro(String barbeiro) {
        this.barbeiro = barbeiro;
    }
}
