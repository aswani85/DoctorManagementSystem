package com.bartek.validators;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import com.bartek.hospitaldoctor.HospitalDoctor;

public class DateValidator implements ConstraintValidator<ValidDates, HospitalDoctor>{

	@Override
	public void initialize(ValidDates constraintAnnotation) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public boolean isValid(HospitalDoctor hospitalDoctor, ConstraintValidatorContext context) {
		
		if(hospitalDoctor.getContractStartDate().before(hospitalDoctor.getContractEndDate())) {
			return true;
		} 
		else return false;
		
	}

}
