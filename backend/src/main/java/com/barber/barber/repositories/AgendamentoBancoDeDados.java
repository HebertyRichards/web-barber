package com.barber.barber.repositories;

import com.barber.barber.Agendamento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AgendamentoBancoDeDados extends JpaRepository<Agendamento, Long> {
}
