package com.bartek.validators;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

import com.bartek.doctor.DoctorDao;

public class UniqueLicenseNumberValidator implements ConstraintValidator<UniqueLicenseNumber, Integer> {

	@Autowired
	private DoctorDao doctorDao;

	@Override
	public void initialize(UniqueLicenseNumber constraintAnnotation) {

	}

	@Override
	public boolean isValid(Integer licenseNumber, ConstraintValidatorContext context) {
		if (doctorDao == null) {
			return true;
		}
		return doctorDao.findByLicenseNumber(licenseNumber) == null;
	}

}
