package com.bartek.hospital;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class HospitalService {

	@Autowired
	private HospitalDao hospitalDao;

	public List<Hospital> getAllHospitals() {
		List<Hospital> hospitals = new ArrayList<>();
		hospitalDao.findAll().forEach(hospitals::add);
		return hospitals;
	}

	public Hospital getHospital(int id) {
		return hospitalDao.findOne(id);
	}

	public void addHospital(Hospital hospital) {
		hospitalDao.save(hospital);
	}

	public void updateHospital(int id, Hospital hospital) {
		hospitalDao.save(hospital);
	}
	
	public void updateHospitalBuffer(int id, Hospital hospital) {
		String buffer = "XXXXXXX";
		hospital.setName(buffer);
		hospitalDao.save(hospital);
	}

	public void deleteHospital(int id) {
		hospitalDao.delete(id);
	}
	

	
	}

