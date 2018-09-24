package com.bartek.validators;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

import com.bartek.hospital.HospitalDao;

public class UniqueHospitalNameValidator implements ConstraintValidator<UniqueHospitalName, String> {

	@Autowired
	HospitalDao hospitalDao;

	@Override
	public void initialize(UniqueHospitalName constraintAnnotation) {
		// TODO Auto-generated method stub

	}

	@Override
	public boolean isValid(String name, ConstraintValidatorContext context) {
		if (hospitalDao == null) {
			return true;
		}
		return hospitalDao.findByName(name) == null;
	}

}
