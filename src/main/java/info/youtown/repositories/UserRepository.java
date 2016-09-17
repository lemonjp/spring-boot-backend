package info.youtown.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import info.youtown.model.User;

public interface UserRepository extends MongoRepository<User, Long> {
    public List<User> findByName(String s);
    public User findById(String id);
}
