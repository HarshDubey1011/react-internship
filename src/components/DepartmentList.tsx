import { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Checkbox, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const departments = [
  {
    department: 'customer_service',
    sub_departments: ['support', 'customer_success'],
  },
  {
    department: 'design',
    sub_departments: ['graphic_design', 'product_design', 'web_design'],
  },
];

const DepartmentList = () => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selectedSubDepartments, setSelectedSubDepartments] = useState<string[]>([]);

  const handleSubDepartmentSelect = (subDepartment: string) => {
    if (selectedSubDepartments.includes(subDepartment)) {
      setSelectedSubDepartments(selectedSubDepartments.filter(d => d!== subDepartment));
    } else {
      setSelectedSubDepartments([...selectedSubDepartments, subDepartment]);
    }
  };

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded? panel : null);
  };

  return (
    <div>
      {departments.map((department, index) => (
        <Accordion key={index} expanded={expanded === `panel-${index}`} onChange={handleChange(`panel-${index}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{department.department}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {department.sub_departments.map((subDepartment, subIndex) => (
              <div key={subIndex}>
                <Checkbox
                  checked={selectedSubDepartments.includes(subDepartment)}
                  onChange={() => handleSubDepartmentSelect(subDepartment)}
                />
                <Typography>{subDepartment}</Typography>
              </div>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default DepartmentList;