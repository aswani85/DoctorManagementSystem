package com.bartek.hospitaldoctor;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bartek.doctor.Doctor;


@Service
public class HospitalDoctorService {

	@Autowired
	HospitalDoctorDao hospitalDoctorDao;

	public List<HospitalDoctor> getAll() {
		List<HospitalDoctor> hospitaldoctors = new ArrayList<>();
		hospitalDoctorDao.findAll().forEach(hospitaldoctors::add);
		return hospitaldoctors;
	}

	public void addHospitalDoctor(HospitalDoctor hospitalDoctor) {
		hospitalDoctorDao.save(hospitalDoctor);
	}

	public List<HospitalDoctor> getAllDoctorsForHospital(int hospitalId) {
		return hospitalDoctorDao.findByHospitalId(hospitalId);
	}
	
	
		
	public void deleteByHospitalIdAndDoctorId(int hospitalId, int doctorId) {
		hospitalDoctorDao.deleteByHospitalIdAndDoctorId(hospitalId, doctorId);
	}
	
}
