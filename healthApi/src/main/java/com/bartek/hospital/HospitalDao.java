package com.bartek.hospital;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HospitalDao extends JpaRepository<Hospital, Integer>{


	Hospital findByName(String name);
}
