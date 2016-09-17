package info.youtown.model;

import java.util.Date;
import org.springframework.data.annotation.Id;
import com.fasterxml.jackson.annotation.JsonProperty;
//import javax.validation.constraints.Min;
//import javax.validation.constraints.NotNull;
//import javax.validation.constraints.Size;
import lombok.Data;

@Data
public class User {
    @Id
    private String id;

    //@NotNull
    //@Size(min = 1, max = 255)
    private String name;
    //@Size(min = 1, max = 255)
    private String memo;
    private Date date;

    public User(@JsonProperty("name") String name, @JsonProperty("memo") String memo) {
        super();
        this.name = name;
        this.memo = memo;
        this.date = new Date();
    }
}
