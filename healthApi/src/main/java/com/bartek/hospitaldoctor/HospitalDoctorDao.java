package com.bartek.hospitaldoctor;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



@Repository
public interface HospitalDoctorDao extends JpaRepository<HospitalDoctor, Integer> {

	
List<HospitalDoctor> findByHospitalId(int hospitalId);
HospitalDoctor findByHospitalIdAndDoctorId(int hospitalId, int doctorId);
public void deleteByHospitalIdAndDoctorId(int hospitalId, int doctorId);
}