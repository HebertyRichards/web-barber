package com.barber.barber.services;

import com.barber.barber.Agendamento;
import com.barber.barber.repositories.AgendamentoBancoDeDados;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AgendamentoService {

    @Autowired
    private AgendamentoBancoDeDados agendamentoRepository;


    public Agendamento criarAgendamento(Agendamento agendamento) {
        return agendamentoRepository.save(agendamento);
    }

   
    public List<Agendamento> listarAgendamentos() {
        return agendamentoRepository.findAll();
    }

    
    public Optional<Agendamento> buscarAgendamentoPorId(Long id) {
        return agendamentoRepository.findById(id);
    }

   
    public boolean cancelarAgendamento(Long id) {
        if (agendamentoRepository.existsById(id)) {
            agendamentoRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
