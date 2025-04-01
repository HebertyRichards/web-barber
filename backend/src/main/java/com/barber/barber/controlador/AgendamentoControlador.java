package com.barber.barber.controlador;

import com.barber.barber.Agendamento;
import com.barber.barber.services.AgendamentoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/agendamentos")
public class AgendamentoControlador {

    @Autowired
    private AgendamentoService agendamentoService;


    @PostMapping
    public ResponseEntity<Agendamento> criarAgendamento(@RequestBody Agendamento agendamento) {
        Agendamento novoAgendamento = agendamentoService.criarAgendamento(agendamento);
        return ResponseEntity.ok(novoAgendamento);
    }

   
    @GetMapping
    public ResponseEntity<List<Agendamento>> listarAgendamentos() {
        List<Agendamento> agendamentos = agendamentoService.listarAgendamentos();
        return ResponseEntity.ok(agendamentos);
    }

   
    @GetMapping("/{id}")
    public ResponseEntity<Agendamento> buscarAgendamentoPorId(@PathVariable Long id) {
        Optional<Agendamento> agendamento = agendamentoService.buscarAgendamentoPorId(id);
        return agendamento.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    
    @DeleteMapping("/{id}")
    public ResponseEntity<String> cancelarAgendamento(@PathVariable Long id) {
        boolean foiCancelado = agendamentoService.cancelarAgendamento(id);
        if (foiCancelado) {
            return ResponseEntity.ok("Agendamento cancelado com sucesso!");
        }
        return ResponseEntity.notFound().build();
    }
}
